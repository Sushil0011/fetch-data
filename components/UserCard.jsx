import style from '../styles/card.module.css'
const UserCard = ({elem}) => {
    const {title,body,userId,tags,rections}=elem;
    return (
        

             <div className={style.card}>
                <span> {userId}</span>

                <h3>{title}</h3>
                <p>  {body}</p>

            <span className={style.tag}>Tags</span>
        <div className={style.tagContainer}>
            

            {
                tags.map((tag,index)=>{
                    return(
<span className={style.tag}  key={index}  >{tag}  </span>
                    )

                })
                
                
                }
        </div>
            </div>     

    
    )
}

export default UserCard