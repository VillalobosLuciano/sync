import { FC } from 'react';
import cn from 'clsx';
import Link from 'next/link';
import { Integration } from 'types';
import s from './IntegrationCard.module.css';
import Image, { ImageProps } from 'next/image';

interface Props {
  className?: string;
  integration: Integration;
  imgProps?: Omit<ImageProps, 'src' | 'layout' | 'placeholder' | 'blurDataURL'>;
}

const IntegrationCard: FC<Props> = ({ integration, imgProps, className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <Link href={`/integration/${integration.slug}`}>
      <a className={rootClassName} aria-label={integration.name}>
        {integration?.image && (
          <div>
            <Image
              quality="85"
              src={integration.image}
              alt={integration.name || 'integration Image'}
              height={140}
              width={250}
              layout="fixed"
              {...imgProps}
            />
          </div>
        )}
      </a>
    </Link>
  );
};

export default IntegrationCard;
