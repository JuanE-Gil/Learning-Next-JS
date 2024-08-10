export default function CommentDetail({
  params,
}: {
  params: {
    productId: string;
    commentId: string;
  };
}) {
  return <h1>Comment {params.commentId} on Product {params.productId}</h1>;
}
