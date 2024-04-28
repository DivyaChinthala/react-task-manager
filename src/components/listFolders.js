import { SimpleGrid } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import Folder from "./folder";
import { useState } from "react";

const folders = [
  {
    id: 1,
    name: "Folder1",
    tasksCount: 5,
    tasks: [
      {
        id: 1,
        name: "task1",
      },
      {
        id: 2,
        name: "task2",
      },
    ],
  },
  {
    id: 2,
    name: "Folder2",
    tasksCount: 18,
    tasks: [
      {
        id: 3,
        name: "task3",
      },
      {
        id: 4,
        name: "task4",
      },
    ],
  },
  {
    id: 3,
    name: "Folder3",
    tasksCount: 8,
    tasks: [],
  },
  {
    id: 4,
    name: "Folder4",
    tasksCount: 15,
    tasks: [],
  },
  {
    id: 1,
    name: "Folder1",
    tasksCount: 5,
    tasks: [],
  },
  {
    id: 2,
    name: "Folder2",
    tasksCount: 18,
    tasks: [],
  },
  {
    id: 3,
    name: "Folder3",
    tasksCount: 8,
    tasks: [],
  },
  {
    id: 4,
    name: "Folder4",
    tasksCount: 15,
    tasks: [],
  },
  {
    id: 1,
    name: "Folder1",
    tasksCount: 5,
    tasks: [],
  },
  {
    id: 2,
    name: "Folder2",
    tasksCount: 18,
    tasks: [],
  },
  {
    id: 3,
    name: "Folder3",
    tasksCount: 8,
    tasks: [],
  },
  {
    id: 4,
    name: "Folder4",
    tasksCount: 15,
    tasks: [],
  },
];
const onDragEnd = (result) => {
  const { source, destination } = result;

  // dropped outside the list
  if (!destination) {
    return;
  }

  // if (source.droppableId === destination.droppableId) {
  //     const items = reorder(
  //         this.getList(source.droppableId),
  //         source.index,
  //         destination.index
  //     );

  //     let state = { items };

  //     if (source.droppableId === 'droppable2') {
  //         state = { selected: items };
  //     }

  //     this.setState(state);
  // } else {
  //     const result = move(
  //         this.getList(source.droppableId),
  //         this.getList(destination.droppableId),
  //         source,
  //         destination
  //     );

  //     this.setState({
  //         items: result.droppable,
  //         selected: result.droppable2
  //     });
  // }
};

const ListFolders = () => {
  const [expandedFolderIds, setExpandedFolderIds] = useState([]);
  const onExpand = (id, val) => {
    setExpandedFolderIds((prevExpandedFolderIds) => {
      return val
        ? [...prevExpandedFolderIds, id]
        : prevExpandedFolderIds.filter((folderId) => {
            return id !== folderId;
          });
    });
  };
  return (
    <SimpleGrid minChildWidth="250px" pt={8} px={4} spacing="40px">
      <DragDropContext onDragEnd={onDragEnd}>
        {folders.map((folder) => {
          return (
            <Folder
              folder={folder}
              expandedFolderIds={expandedFolderIds}
              onExpand={onExpand}
            />
          );
        })}
      </DragDropContext>
    </SimpleGrid>
  );
};
export default ListFolders;
