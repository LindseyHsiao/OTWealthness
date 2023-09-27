export default function Table() {

    const usernameArray = [ 
        //key, value
        {
            firstName: "one",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          {
            firstName: "two",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          {
            firstName: "three",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          {
            firstName: "four",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          {
            firstName: "five",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          {
            firstName: "six",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          },
          
            ]


    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Eye Color</th>
            </tr>
            <tr>
                <td>Hello</td>
                <td>Goodbye</td>
                <td>25</td>
                <td>Pink</td>
            </tr>
            {/* <tr>
                <td>Emil</td>
                
            </tr>
            <tr>
                <td>16</td>
                <td>14</td>
                <td>10</td>
            </tr> */}
        </table>
    )
}