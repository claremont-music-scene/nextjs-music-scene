import SignupBanner from "../subscription-banner";
import Menu from "../nav/menu";
import Footer from "../footer";
import DetailHeader from "./detail-header";

export default function DetailPage({headline}) {
    return (<>
        <Menu/>

        <DetailHeader headline={headline} author="Donny"/>

        <section className="bg-black body-font lg:-mt-32">
            <div className="container px-5 mx-auto lg:pt-12 lg:pb-12 ">
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="w-full max-w-screen-sm m-auto mt-12 lg:w-1/4">
                        <div className="px-5">
                            <div className="flex h-full">
                                <div className="w-full py-4 bg-black">
                                    <div className="mb-1 bg-black">
                                        <h1
                                            className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue to-pink bg-clip-text">
                                            “PROBABLY THE MOST PROGRESSIVE THING THAT WE’VE DONE SINCE 1964”
                                        </h1>
                                    </div>
                                    <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink">
                                        Cars
                                        <small className="text-xs text-pink ">
                                            <span className="text-gray-500">BY</span>
                                            DHH
                                        </small>
                                    </h1>
                                    <p className="my-4 font-medium leading-none tracking-tighter text-white">
                                        General Motors debuted a new logo to convey the automaker’s renewed commitment
                                        to electric vehicles.</p>

                                </div>
                            </div>
                        </div>
                        <div className="px-5 border-t-8 border-green">
                            <div className="flex h-full">
                                <div className="w-full py-4 bg-black">
                                    <div className="mb-1 bg-black">
                                        <h1
                                            className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue to-pink bg-clip-text">
                                            “PROBABLY THE MOST PROGRESSIVE THING THAT WE’VE DONE SINCE 1964”
                                        </h1>
                                    </div>
                                    <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink">
                                        Cars
                                        <small className="text-xs text-pink ">
                                            <span className="text-gray-500">BY</span>
                                            DHH
                                        </small>
                                    </h1>
                                    <p className="my-4 font-medium leading-none tracking-tighter text-white">
                                        General Motors debuted a new logo to convey the automaker’s renewed commitment
                                        to electric vehicles.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full px-4 mt-12 text-lg leading-none tracking-tight text-white lg:px-0 lg:w-3/4">
                        <p className="pb-6">Turd polishing put a record on and see who dances, dog and pony show, nor
                            one-sheet.
                            Ensure to follow requirements when
                            developing solutions three-martini lunch, that jerk from finance really threw me under the
                            bus. Bob
                            called an all-hands
                            this afternoon.</p>
                        <p className="pb-6">We've got kpis for that this is a no-brainer viral engagement pixel pushing.
                            Run
                            it up
                            the flagpole please use
                            "solutionise" instead of solution ideas! :) dunder mifflin form without content style
                            without
                            meaning target rich
                            environment. Three-martini lunch. Get buy-in prioritize these line items, or deliverables
                            yet back
                            to the drawing-board
                            let's put a pin in that, close the loop. Manage expectations product market fit win-win-win.
                            The
                            horse is out of the
                            barn poop, but can you put it on my calendar? but drink from the firehose, but quick-win.
                        </p>
                        <div
                            className="p-20 mb-6 italic font-bold tracking-tight text-white bg-gray-100 border-l-8 border-green lg:text-7xl bg-gradient-to-tr from-blue to-pink">
                            "This could be an image"
                        </div>
                        <p className="pb-6">If you could do that, that would be great this is a no-brainer, or Q1
                            regroup.
                            Groom the
                            backlog what do you feel you
                            would bring to the table if you were hired for this position. Back of the net. Scope creep
                            can you
                            slack it to me?
                            shotgun approach build on a culture of contribution and inclusion please advise soonest.</p>
                        <h2 className="mt-4 mb-4 text-6xl font-black leading-none tracking-tighter text-green ">Is a
                            no-brainer, or Q1
                            regroup.</h2>
                        <p className="pb-6">Gain traction make it more corporate please we need to harvest synergy
                            effects
                            not
                            enough bandwidth, and we want to
                            empower the team with the right tools and guidance to uplevel our craft and build better nor
                            low-hanging fruit the right
                            info at the right time to the right people.</p>
                    </div>
                </div>
            </div>
        </section>


        <SignupBanner/>
        <Footer/>

    </>)
}