import {useRouter}  from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container';
const Task = (props)=>{

    const router = useRouter();
    const {id} = router.query;
    console.log("obj ", id);
    return(
        <Container>
            <div className="row">
                <div className=" col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                        {props.task.title}

                        </div>
                        <div className="card-body">
                        {props.task.body}

                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}
Task.getInitialProps = async (ctx) => {
    const res= await fetch ("https://jsonplaceholder.typicode.com/posts/"+ctx.query.id);
     const data= await res.json();
   //  console.log(data);
     return {task:data}
 }
 
export default Task;