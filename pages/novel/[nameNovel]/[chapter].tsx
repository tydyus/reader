import {useRouter} from 'next/router';
interface Props {}

const Chapter:React.FC<Props> = props =>{
    const router = useRouter();
    return (
        <div className="novelChapterPage">
            <h1>Novel {router.query.nameNovel}, chapter {router.query.chapter}</h1>
        </div>
    )

}

export default Chapter;