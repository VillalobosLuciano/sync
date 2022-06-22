import GetStarted from '@/components/getStarted';

const intro = {
  steps: [
    {
      content: 'de perro',
      id: 1
    },
    {
      content: 'de perro hno legal sosi',
      id: 2
    }
  ]
};

export default function getStarted() {
  return (
    <>
      <GetStarted>
        {intro.steps.map((step) => (
          <div key={step.id} className="">
            {step.content}
          </div>
        ))}
      </GetStarted>
    </>
  );
}
