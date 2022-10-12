import Note from './Note'

const NotesAll = () => {
    return (
        <div className="grid gap-4 auto-rows-[minmax(250px,_1fr)]">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default NotesAll;