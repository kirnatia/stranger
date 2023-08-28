import { useState } from "react"
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    return (
        <form>
            <label htmlFor="title"> Title</label>
            <input type="text" id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="description"> Description</label>
            <textarea id="description"
            value={description}
                onChange={(e) => setDescription(e.target.value)} />
             <label htmlFor="price"> Price</label>
            <textarea id="price"
            value={price}
                onChange={(e) => setPrice(e.target.value)} />
              <label htmlFor="location"> Location</label>
            <textarea id="location"
            value={location}
                onChange={(e) => setLocation(e.target.value)} />
              <label htmlFor="willDeliver"> Will Deliver</label>
            <textarea id="willDeliver"
            value={willDeliver}
            onChange={(e) => setWillDeliver(e.target.value)}/>
<button type="submit">Create Post</button>
       </form>
    )

}