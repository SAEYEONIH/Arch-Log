"use client";

import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error.message}</p>;

  return <h1>GraphQL 응답: {data.hello}</h1>;
}
