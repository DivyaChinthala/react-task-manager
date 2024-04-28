import { Box, Icon, Badge } from "@chakra-ui/react";
import { CiFolderOn } from "react-icons/ci";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import { includes } from "lodash";

const Folder = ({ folder, expandedFolderIds, onExpand }) => {
  const grid = 8;
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "",
    padding: grid,
    width: 250,
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "",

    // styles we need to apply on draggables
    ...draggableStyle,
  });
  return (
    <Box
      h="100%"
      border="1px"
      borderColor="gray.200"
      pt={8}
      pb={4}
      px={4}
      borderRadius="8px"
    >
      <Droppable droppableId={folder.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <Box
              display={"flex"}
              justifyContent={"start"}
              alignItems={"center"}
            >
              {folder.name}
              <Icon as={CiFolderOn} ml="auto" />
            </Box>
            <Box display={"flex"} mt="12px" alignItems="center">
              {includes(expandedFolderIds, folder.id) ? (
                <Icon
                  as={MdOutlineExpandCircleDown}
                  cursor={"pointer"}
                  onClick={() => onExpand(folder.id, false)}
                  boxSize={4}
                />
              ) : (
                <Icon
                  as={IoIosArrowDropup}
                  cursor={"pointer"}
                  boxSize={4}
                  onClick={() => onExpand(folder.id, true)}
                />
              )}
              <Badge colorScheme="purple" ml="auto" borderRadius={"4px"} p={1}>
                Tasks {folder.tasksCount}
              </Badge>
            </Box>
            {includes(expandedFolderIds, folder.id) &&
              folder?.tasks.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {/* <Box
                        border="1px"
                        borderColor="gray.200"
                        borderRadius="4px"
                        mb="4px"
                      > */}
                      {item.name}
                      {/* </Box> */}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
};
export default Folder;
