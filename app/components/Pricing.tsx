import cn from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import Button from 'components/ui/Button';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';

interface Props {
  products: ProductWithPrice[];
}

const pricing = {
  features: [
    'Unlimited products',
    'Unlimited subscribers',
    'Advanced analytics',
    '1-hour, dedicated support response time',
    'Marketing automations',
    'Custom integrations'
  ]
};

type BillingInterval = 'year' | 'month';

export default function Pricing({ products }: Props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products.length)
    return (
      <section className="max-w-7xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center"></div>
        <p className="text-6xl font-extrabold text-white sm:text-center sm:text-6xl">
          No subscription pricing plans found. Create them in your{' '}
          <a
            className="text-[#A9FFF1] underline"
            href="https://dashboard.stripe.com/products"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stripe Dashboard
          </a>
          .
        </p>
      </section>
    );

  return (
    <section className="lg:pb-20">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 ">
        <h2 className="text-base font-semibold uppercase tracking-wide text-[#A9FFF1]">
          Pricing
        </h2>
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight mt-1">
          Plans for teams of all sizes
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-zinc-200">
          Choose an affordable plan that&apos;s packed with the best features
          for engaging your audience, creating customer loyalty, and driving
          sales.
        </p>
        <div className="lg:flex mt-12">
          <div className="relative self-center mt-6 rounded-lg p-0.5 flex sm:mt-8 border border-[#A9FFF1]/30">
            <button
              onClick={() => setBillingInterval('month')}
              type="button"
              className={`${
                billingInterval === 'month'
                  ? 'relative w-1/2 bg-[#A9FFF1]/5 border border-[#A9FFF1]/30 shadow-sm text-[#A9FFF1]'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#A9FFF1] focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingInterval('year')}
              type="button"
              className={`${
                billingInterval === 'year'
                  ? 'relative w-1/2 bg-[#A9FFF1]/5 border border-[#A9FFF1]/30 shadow-sm text-[#A9FFF1]'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#A9FFF1] focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="mt-8 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => {
            const mostPopular = product.name === 'Cloud Sync';
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100);
            return (
              <div
                key={product.id}
                className={cn(
                  'relative p-8 rounded-2xl shadow-sm flex flex-col',
                  {
                    'border border-[#A9FFF1]': mostPopular,
                    'border border-[#A9FFF1]/30': !mostPopular
                  }
                )}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-200 mt-2">
                    {product.name}
                  </h3>
                  {mostPopular ? (
                    <p className="absolute top-0 rounded-lg bg-[#111a19] border border-[#A9FFF1] px-6 py-2 text-xs font-semibold uppercase tracking-wide text-[#A9FFF1] transform -translate-y-1/2">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-white">
                    <span className="text-5xl font-bold tracking-tight">
                      {priceString}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      /{billingInterval}
                    </span>
                  </p>
                  <p className="mt-6 text-zinc-300">{product.description}</p>

                  <ul role="list" className="mt-6 space-y-6">
                    {pricing.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="flex-shrink-0 w-6 h-6 text-[#A9FFF1]"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="slim"
                  type="button"
                  disabled={isLoading}
                  loading={priceIdLoading === price.id}
                  onClick={() => handleCheckout(price)}
                  className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                >
                  {product.name === subscription?.prices?.products?.name
                    ? 'Manage'
                    : 'Subscribe'}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
