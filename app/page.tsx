import Textin from "./components/textinput";
import Input from "./components/input";
import Inputmessage from "./components/inputmessage";
import Inputradio from "./components/inputradio";
import Submit from "./components/Submit";

export default function Home() {
  return (
    <div className="bg-green-100 flex flex-col sm:flex-row items-center justify-center h-screen ">
      <div className="border space-y-3 border-white bg-white w-full max-w-3xl p-10 rounded-2xl">
        <div>
          <h1 className="text-green-900 text-3xl font-bold">Contact Us</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
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
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-1/2 flex items-center px-4 py-3 border border-gray-400 rounded">
              <Inputradio>General Enquiry</Inputradio>
            </div>
            <div className="w-full sm:w-1/2 flex items-center px-4 py-3 border border-gray-400 rounded">
              <Inputradio>Support Request</Inputradio>
            </div>
          </div>
        </div>
        <div>
          <Textin>Message</Textin>
          <Inputmessage></Inputmessage>
        </div>
        <div className="space-x-3 flex">
          <input type="checkbox" className="scale-125" />
          <Textin>I consent to being contacted by the team </Textin>
        </div>
        <div>
          <Submit></Submit>
        </div>
      </div>
    </div>
  );
}
