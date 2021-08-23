import {useRouter} from 'next/router';
interface Props {}

const Library:React.FC<Props> = props =>{
    const router = useRouter();
    return (
        <div className="collectionPage">
            <h1>My collection {router.query.collectionName} Page</h1>
        </div>
    )

}

export default Library;