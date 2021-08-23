import {useRouter} from 'next/router';

interface Props {}

const Novel:React.FC<Props> = props =>{
    const router = useRouter();
    return (

            <div className="novelPage">
                <h1>Novel {router.query.nameNovel} Page</h1>
            </div>

    )

}

export default Novel;