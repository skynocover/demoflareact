type RoutesProps = {
  category: string;
  slug: string;
};

export async function getEdgeProps({ params }) {
  const { category, slug } = params;
  console.log(category, slug);

  return { props: { category, slug } as RoutesProps };
}

export default ({ category, slug }: RoutesProps) => {
  return (
    <div>
      <p>{category}</p>
      <p>{slug}</p>
    </div>
  );
};
