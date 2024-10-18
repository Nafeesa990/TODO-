import React, { useState, useEffect } from 'react';
import Nav1 from './nav1';
import { Form } from 'react-bootstrap';
import AXIOS from 'axios';

function View() {
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    alldata();
  }, []);

  const alldata = async () => {
    const url = "http://localhost:9000/api/alldata";
    await AXIOS.get(url).then((res) => {
      setData(res.data.data);
      setCheckedItems(new Array(res.data.data.length).fill(false));
    });
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };

  // Delete function
  const deleteTask = async (idno) => {
    const url = `http://localhost:9000/api/deletedata/${idno}`;
    await AXIOS.delete(url).then((res) => {
      alert(res.data);
    });
  };

  return (
    <div>
      <Nav1 />
      <div style={{ margin: '60px', padding: '5px', border: '1px ' }}>
        <Form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ backgroundColor: '#2991f2' }}>Title</th>
                <th style={{ backgroundColor: '#2991f2' }}>Description</th>
                <th style={{ backgroundColor: '#2991f2' }}>Status</th>
                <th style={{ backgroundColor: '#2991f2' }}>Delete</th>
                <th style={{ backgroundColor: '#2991f2' }}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ls, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>{ls.title}</td>
                    <td style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>{ls.des}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={checkedItems[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    <td>
                <input
                    type="submit"
                    onClick={() => {
                    deleteTask(ls._id);
                    }}
                    value="Delete"
                    style={{ border: 'none' }}
                    /></td>
                    <td>
                    <a href={`/updatetask/${ls._id}`} className="btn btn" style={{ backgroundColor:'none'}}>Edit</a>
                    </td>


                  </tr>
                );
              })}
            </tbody>
          </table>
        </Form>
      </div>
    </div>
  );
}

export default View;
