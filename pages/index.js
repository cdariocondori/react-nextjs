
//import Navigation from '../components/navigation';
import Head from 'next/head'
import Container from '../components/container'
import Users from '../components/users'
import Modal from '../components/Modal'

const Index = (props) =>{


    return(
        <div>
        <Head>
            <title>Next project - Home</title>
        </Head>
        <Container>
            
            <h1> Next</h1>
         
            <Users users={props.users} />
        </Container>

    
        </div>
    ) 
};
Index.getInitialProps = async (ctx) => {
   const res= await fetch ("https://jsonplaceholder.typicode.com/posts");
    const data= await res.json();
  //  console.log(data);
    return {users:data}
}




export default Index;
