import axios from "axios";
import styles from "../styles/Home.module.css"
import Head from "next/head";
import UserCard from "@/components/UserCard";
export const  getStaticProps=async ()=>{
   const res=await axios.get(' https://dummyjson.com/posts')
    const apiProductData=  await res.data.posts;
     return{
   props:{
         apiProductData,
        
      },
    }
  }


const index = ({apiProductData}) => {

  console.log(apiProductData)

  return (
<>
    <Head>
      <title>
        Users
      </title>
    </Head>



<div className={styles.Wrapper}>


<div className={styles.cardWrapper}>
{
  apiProductData.map((elem)=>{
    return(   <UserCard key={elem.id} elem={elem}/>)
    
  })
}
</div>


</div>
    </>
  )
}

export default index