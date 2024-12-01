import { useRecoilState } from "recoil";
import { useEffect, useRef} from "react";
import { conversation } from "../store";

export function Conv() {
    const [Conv] = useRecoilState(conversation);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [Conv]);

    return (
        <div className="flex flex-col items-center p-4 bg-[#202124] text-white w-full h-full">
            <div className="w-full max-w-4xl  overflow-y-auto scrollbar-hide space-y-4 p-4 bg-[#202124] rounded-lg shadow-md">
                {Conv.length > 0 ? (
                    Conv.map((conv, index) => (
                        <div key={index}>
                            {conv.user && (
                                <div className="flex justify-end">
                                    <div className="bg-gray-700 max-w-xs p-3 rounded-lg text-white shadow-md">
                                        {conv.user}
                                    </div>
                                </div>
                            )}
                            {conv.model && (
                                <div className="flex justify-start mt-2">
                                    <div className="bg-gray-700 max-w-xs p-3 rounded-lg text-white shadow-md">
                                        {conv.model}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="flex justify-center">
                        <p className="text-center text-4xl font-bold text-gray-400">
                            Welcome to SChat!
                            <br />
                            Start a Conversation Now!
                        </p>
                    </div>
                )}
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
}
