import React, { useState, useEffect } from 'react';
import Nav1 from './nav1';
import { Form } from 'react-bootstrap';
import AXIOS from 'axios';

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    alldata();
  }, []);

  const alldata = async () => {
    const url = "http://localhost:9000/api/alldata";
    await AXIOS.get(url).then((res) => {
      setData(res.data.data.map(item => ({ ...item, checked: false })));
    });
  };

  const handleCheckboxChange = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].checked = !newData[index].checked;
      return newData;
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
              </tr>
            </thead>
            <tbody>
              {data.map((ls, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textDecoration: ls.checked ? 'line-through' : 'none' }}>{ls.title}</td>
                    <td style={{ textDecoration: ls.checked ? 'line-through' : 'none' }}>{ls.des}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={ls.checked}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                    <td>Delete</td>
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
