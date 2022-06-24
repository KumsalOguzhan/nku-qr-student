import React from "react"
import { Table } from "reactstrap"

const DynamicTable = ({ data }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          {data.head?.map((head, index) => (
            <th {...head.props} key={index}>{head.element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.body?.map((body, index) => (
          <tr key={body.id}>
            <th scope="row">{index + 1}</th>
            {body.elements?.map((element, index) => (
              <td {...element.props} key={index}>{element.element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

// eslint-disable-next-line no-lone-blocks
{/* <DynamicTable
data={{
  head: [
    { element: "Sınıf", props: { scope: "col" } },
    { element: "Sınıf", props: { scope: "col" } },
    { element: "Sınıf", props: { scope: "col" } },
  ],
  body: Cases.data
    .map((cases) => ({
      id: cases.id,
      elements: [
        {
          element: <>{cases.is_open ? "Açık" : "Kapalı"}</>,
          props: {
            className: cases.is_open
              ? "bg-lime-400 text-left text-sm text-gray-900"
              : "text-left text-sm text-gray-900",
          },
        },
        {
          element: (
            <>
              <Link
                to={`/case/action/${cases._id}`}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Seç
              </Link>
            </>
          ),
          props: {
            className: "text-right text-sm font-medium space-x-6",
          },
        },
      ],
    })),
}}
/> */}

export default DynamicTable
