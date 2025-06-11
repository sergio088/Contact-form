import Textin from "./components/textinput";
import Input from "./components/input";
import Inputmessage from "./components/inputmessage";
import Inputradio from "./components/inputradio";

export default function Home() {
  return (
    <div className="bg-green-100 flex flex-col items-center justify-center h-screen ">
      <div className="border space-y-3 border-white bg-white w-[800px] p-10 rounded-2xl">
        <div>
          <h1 className="text-green-900 text-3xl font-bold">Contact Us</h1>
        </div>
        <div className="flex space-x-3">
          <div className="w-1/2">
            <Textin>Firt Name</Textin>
            <Input type={"text"}></Input>
          </div>
          <div className="w-1/2">
            <Textin>Last Name</Textin>
            <Input type={"text"}></Input>
          </div>
        </div>
        <div>
          <Textin>Email Adress</Textin>
          <Input type="Email"></Input>
        </div>
        <div className="space-y-3">
          <div>
            <Textin>Query Type</Textin>
          </div>
          <div className="flex space-x-3">
            <div className="w-1/2 flex border border-gray-400 rounded py-3">
              <Inputradio>General Enquiry</Inputradio>
            </div>
            <div className="w-1/2 border border-gray-400 rounded py-3">
              <Inputradio>Support Request</Inputradio>
            </div>
          </div>
        </div>
        <div>
          <Textin>Message</Textin>
          <Inputmessage type="text"></Inputmessage>
        </div>
        <div className="space-x-3 flex">
          <input type="checkbox" className="scale-125" />
          <Textin>I consent to being contacted by the team *</Textin>
        </div>
      </div>
    </div>
  );
}
