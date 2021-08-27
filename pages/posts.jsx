import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import wrapper from '../Providers/createCtx';
import { GET_POST } from '../reducers/post';
import {END} from 'redux-saga'
import Link from 'next/link';

const posts = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector(state=>state.post);
  const postLink = posts.map((v,k)=>{
    return (
      <li key = {k}>
        <h2><Link href={`/posts/${v.id}`}><a >{v.title}</a></Link></h2>
        <pre>{v.body}</pre>
      </li>
    )
  })

  useEffect(()=>{

    function scrollFn(){
      console.log(window.scrollY,document.documentElement.clientHeight,document.documentElement.scrollHeight)
      if((window.scrollY+document.documentElement.clientHeight)){
        dispatch(GET_POST())
      }

    }
    window.addEventListener('scroll',scrollFn) 
    return () =>{
      window.removeEventListener('scroll',scrollFn)
    }
  },[])


  return (
    <>
    <h1>POSTs {posts.length}</h1> 
    <ul>
      {postLink}
    </ul>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((Store)=>async(req,res)=>{
  // dispatch로 API 요청 그리고 상태를 변경시킴.
  Store.dispatch(GET_POST())
  Store.dispatch(END)
  await Store.sagaTask.toPromise();
});

export default posts;