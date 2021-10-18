type IndexProps = {
  message: string;
};

export async function getEdgeProps({ params, query, event }) {
  console.log(JSON.stringify({ params, query }));
  return {
    props: { message: "Hello" } as IndexProps,
    revalidate: 60 /** cache seconds */,
    notFound: true,
  };
}

export default ({ message }: IndexProps) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
