import { useRouter } from "next/router";
import wrapper from "../../Providers/createCtx";
import { GET_POST_DETAIL } from "../../reducers/post";
import {END} from 'redux-saga'
import { useSelector } from "react-redux";
import Link from "next/link";


const post = () => {
  const post = useSelector(state=>state.post.postDetail)
  return (
    <div>
        <h3>{post.title}</h3>
        <dl>
          <dt>{post.userId}</dt>
          <dt>{post.body}</dt>
        </dl>
        <Link href="/posts"><a > 목록가기</a></Link>
    </div>
  );
}


export const getServerSideProps = wrapper.getServerSideProps((Store)=>async(req,res)=>{
  // console.log(req)
  const {id} = req.params;
  Store.dispatch(GET_POST_DETAIL(id));
  Store.dispatch(END);
  await Store.sagaTask.toPromise(); 
  
  console.log(id);
})



export default post;