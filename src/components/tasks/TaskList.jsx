import React from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

function TaskList() {
  return (
    <>
      <h1 className="mt-4 mr-4">Task</h1>

      <div className="m">
        <Table>
          <Table.Head>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Descreption</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Priority</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <Link>Edit</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
              <Table.Cell>
                <Link>Edit</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <Link>Edit</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Google Pixel Phone
              </Table.Cell>
              <Table.Cell>Gray</Table.Cell>
              <Table.Cell>Phone</Table.Cell>
              <Table.Cell>$799</Table.Cell>
              <Table.Cell>
                <Link>Edit</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Apple Watch 5
              </Table.Cell>
              <Table.Cell>Red</Table.Cell>
              <Table.Cell>Wearables</Table.Cell>
              <Table.Cell>$999</Table.Cell>
              <Table.Cell>
                <Link>Edit</Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default TaskList;
