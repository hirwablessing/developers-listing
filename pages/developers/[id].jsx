export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    const paths = data.map(dev => {
        return{
            params: {id: dev.id.toString()}
        }
    })
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {

    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
  
    return {
      props: { developers: data }
    }
  }

function Details({developers}) {
    return (
        <div>
            <div>
                <h1>{developers.name}</h1>
                <p>{developers.email}</p>
                <p>{developers.website}</p>
                <p>{developers.address.city}</p>
            </div>
        </div>
    )
}

export default Details
