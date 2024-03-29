import Layout from "../../components/MyLayout";
import axios from "axios";

const Post = (props: any) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context: any) {
  const {id} = context.query;
  const res = await axios.get<any>(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.data;

  console.log(`Fetched show: ${show.name}`);

  return {show};
};

export default Post;
