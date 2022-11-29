import { useState } from "react";
import { TextField } from '../components/TextField';
import { TextAreaField } from '../components/textAreaField';


export const CreatePost = () => {

    const [newJobTitle, setNewJobTitle] = useState(undefined);
    const [newJobDescription, setNewJobDescription] = useState(undefined);



    return <>
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-12">
                        <TextAreaField label="description"
                            value={newJobDescription}
                            setValue={setNewJobDescription} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                //new Post(newJobTitle, newJobDescription));
                                setNewJobTitle('');
                                setNewJobDescription('');
                            }}>
                            Add Post
                        </button>
                    </div>
                </div>
            </li>
        </ul>

    </>

}