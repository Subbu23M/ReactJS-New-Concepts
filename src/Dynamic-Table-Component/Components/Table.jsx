import React from 'react';

const Table = (props) => {
    // Object Destructuring - ES6
    const {
        data,
        columns
    } = props;

    return(
        <table className='table table-bordered table-sm text-center mt-2 table-hover'>
            <thead>
                <tr>
                    {
                        columns.map((ele, index) => {
                                    // console.log(ele);

                                    // Object Destructuring - ES6
                                    const {
                                        heading
                                    } = ele;

                            return(
                                <th key={index}>
                                    {heading}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>

            <tbody>
                {
                    data.map((ele, index) => {
                        // console.log(ele);
                        return(
                            <tr key={index}>
                                {
                                    columns.map((elem, i) => {
                                                // console.log(elem);

                                                // Object Destructuring - ES6
                                                const {
                                                    value
                                                } = elem;

                                        if (elem.value.includes('.')) {
                                            const itemSplit = elem.value.split('.') //['address','city']
                                            // console.log(itemSplit);

                                            return(
                                                <td key={i}>
                                                    {
                                                        ele[itemSplit[0]][itemSplit[1]]
                                                    }
                                                </td>
                                            )
                                        }else{
                                            return(
                                                <td key={i}>
                                                    {ele[`${value}`]}
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;