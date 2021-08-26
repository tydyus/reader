import {useRouter} from 'next/router';
import Edit from "../../../../components/novel/edition.form"
interface Props {}

const Chapter:React.FC<Props> = props =>{
    const router = useRouter();
    return (
        <div className="novelChapterPage">
            <h1>Novel {router.query.nameNovel}, chapter {router.query.chapter}</h1>
            <h2>Edition</h2>
            <Edit id={router.query.nameNovel as string+router.query.chapter} />
        </div>
    )

}

export default Chapter;