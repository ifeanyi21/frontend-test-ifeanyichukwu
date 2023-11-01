import FilterButton from "./Buttons/FilterButton";
import FilterIcon from "./assests/icons/expand_more.svg";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Close from "./assests/icons/close.svg";
import Button from "./Buttons/Button";
import Filter from "./services/context/store";
import { ACTION_TYPES } from "./services/actions/actions";
import FormSelect from "./Select/FormSelect";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  // const [selectedDay, setSelectedDay] = React.useState(new Date());
  const [reactState, dispatch] = React.useContext(Filter);
  const [applyButton, setApplyButton] = React.useState(false);
  const typeList = [
    "Store Transactions",
    "Get Tipped",
    "Withdrawals",
    "Chargebacks",
    "Cashbacks",
    "Refer & earn",
  ];

  const statusList = ["Successful", "Pending", "Failed"];

  const pills = ["Today", "Last 7 days", "This month", "Last 3 months"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { status, type } = reactState;
  const [, setSelectedType] = React.useState([]);
  const [, setSelectedStatus] = React.useState([]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setApplyButton(true);
    dispatch({
      type: ACTION_TYPES.TYPE,
      payload: event.target.value,
    });
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setApplyButton(true);
    dispatch({
      type: ACTION_TYPES.STATUS,
      payload: event.target.value,
    });
  };
  return (
    <>
      <FilterButton
        text={"Filter"}
        icon={FilterIcon}
        onClick={toggleDrawer("right", true)}
      />
      <Drawer
        sx={{
          "& .MuiDrawer-paperAnchorRight": {
            backgroundColor: "transparent",
          },
        }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Paper
          className="px-6 py-5 m-1 relative flex"
          sx={{
            width: 485,
            height: 876,
            borderRadius: "20px",
          }}
          role="presentation"
        >
          <div className="relative overflow-hidden">
            <header className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#131316]">Filter</h2>
              <button onClick={toggleDrawer("right", false)}>
                <img src={Close} alt="close" />
              </button>
            </header>
            <div className="flex gap-1">
              {pills.map((item, index) => {
                return (
                  <div className="flex items-center justify-center" key={index}>
                    <button
                      className="text-sm py-[10px] px-[18px] font-semibold rounded-[100px] border-[#EFF1F6] border-[1px]"
                      style={{ letterSpacing: "-0.4px", lineHeight: "16px" }}
                    >
                      <span> {item}</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-6">
              <div className="text-[#131316] font-semibold mb-3">
                Date Range
              </div>
              <div className="flex justify-between gap-[6px]">
                <div className="bg-[#EFF1F6] border-[#EFF1F6] rounded-xl w-full">
                  {/* <DatePicker
                    mode="single"
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                  /> */}
                  <input
                    className="bg-[#EFF1F6] border-[#EFF1F6] px-4 py-[14px] rounded-xl"
                    type="date"
                  />
                </div>
                <div className="bg-[#EFF1F6] border-[#EFF1F6] rounded-xl w-full">
                  <input
                    className="bg-[#EFF1F6] border-[#EFF1F6] px-4 py-[14px] rounded-xl"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[#131316] font-semibold mb-3">
                Transaction Type
              </div>
              <div>
                <FormSelect
                  value={type}
                  list={typeList}
                  handleChange={handleTypeChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="text-[#131316] font-semibold mb-3">
                Transaction Status
              </div>
              <div>
                <FormSelect
                  value={status}
                  list={statusList}
                  handleChange={handleStatusChange}
                />
                {/* <FormControl
                  className="w-full"
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderStyle: "none",
                    },
                  }}
                >
                  <Select
                    className="!rounded-xl bg-[#EFF1F6] border-[#EFF1F6] !text-sm"
                    sx={{ "& .MuiSelect-outlined": { padding: "14px 16px" } }}
                    multiple
                    value={status}
                    onChange={handleStatusChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={() => status.join(", ")}
                  >
                    {statusList.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={status.indexOf(name) > -1}
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                        <ListItemText className="font-semibold text-sm text-[#131316]">
                          {name}
                        </ListItemText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
              </div>
            </div>
            <div className="absolute w-full bottom-0">
              <div className="flex justify-between gap-3 items-start bottom-0">
                <Button text={"Clear"} onClick={() => console.log("Hello")} />
                <Button
                  text={"Apply"}
                  css={`
                    ${applyButton ? "bg-[#131316] text-white" : "bg-[#DBDEE5]"}
                  `}
                  onClick={() => console.log("Hello")}
                />
              </div>
            </div>
          </div>
        </Paper>
      </Drawer>
    </>
  );
}
