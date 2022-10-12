import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className="bg-[#fef68a] rounded-xl p-6 min-h-[170px] flex flex-col justify-between">
            <span>Hello, my first note is here.</span>
            <div className="flex items-center justify-between">
                <small>04/10/2022</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>

        </div>
    )
}

export default Note;