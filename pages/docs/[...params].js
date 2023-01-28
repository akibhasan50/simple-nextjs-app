import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  console.log(params.length);
  if (params.length === 2) {
    return (
      <h1>
        {" "}
        two {params[0]} - {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    <h1> one {params[0]}</h1>;
  }

  return <div>hello from docs</div>;
}
