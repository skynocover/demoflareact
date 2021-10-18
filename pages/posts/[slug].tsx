type RoutesProps = {
  slug: string;
};

export async function getEdgeProps({ params }) {
  const { slug } = params;
  console.log(slug);

  return { props: { slug: slug } as RoutesProps };
}

export default ({ slug }: RoutesProps) => {
  return (
    <div>
      <p>{slug}</p>
    </div>
  );
};
