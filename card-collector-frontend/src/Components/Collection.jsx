import '../assets/stylesheets/components/_collection.scss';

function Title({title}){
    if(title){
        return <div className="card-collection-header">{title}</div>
    }
    return null;
}

export default function Collection({isPending, isError, error, title, children}){   
    if(isPending){
        return (
            <div className="card-collection">Loading collection...</div>
        )
    }
    if(isError){
        return (
            <div className="card-collection">Error: {error.message}</div>
        )
    }

    return (
        <div className="card-collection">
            <Title title={title}/>
            <div className="card-collection-body">
                {children}
            </div>
        </div>
    )
}