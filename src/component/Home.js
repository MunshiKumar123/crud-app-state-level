import React, { memo, useCallback, useEffect, useState } from "react";
import { Button, Input } from '../child'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { formData, getData, updateData } from "../redux/Action/CrudAction";

const Home = () => {

    const dispatch = useDispatch();
    const crud = useSelector(state => state.crud)
    const [index, setIndex] = useState();
    const [save, setSave] = useState(false)

    const dataSave = () => {
        let data = {
            id: Math.random(),
            name: crud.name,
            email: crud.email,
        }
        dispatch(getData(data))

    }

    const edit = () => {
        const data = crud?.data?.map((ele) => {
            if (ele.id === index.id) {
                return {
                    ...ele,
                    name: crud.name,
                    email: crud.email,
                }
            }
            return ele
        })
        dispatch(updateData(data))
        setSave(false)

    }
    return (
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <Input type="text" placeholder="name" value={crud.name} className="form-control w-50"
                        onChange={(e) => dispatch(formData({ prop: 'name', value: e.target.value }))}
                    />
                    <Input type="email" placeholder="email" value={crud.email} className="form-control w-50 mt-2"
                        onChange={(e) => dispatch(formData({ prop: 'email', value: e.target.value }))}
                    />
                    <Button className='btn btn-success btn-sm mt-1' onClick={!save ? dataSave : edit}>{!save ? 'save' : 'update'}</Button>
                </div>
                <div className="col-sm-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SQ.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {crud?.data?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>
                                        <Button className='btn btn-primary btn-sm' onClick={() => {
                                            setIndex(item);
                                            setSave(true)
                                            crud.name = item.name;
                                            crud.email = item.email;
                                        }}> edit </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}

export default memo(Home);