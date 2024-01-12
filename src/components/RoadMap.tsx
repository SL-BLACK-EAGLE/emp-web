"use client";
import './roadmap.css';
import {Fade} from "react-awesome-reveal";


const RoadMap = () => {

    const listItems = [
        { date: '2023', title: 'Q4', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!', color: '--accent-color-1' },
        { date: '2024', title: 'Q1', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-2' },
        { date: '2024', title: 'Q2', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-3' },
        { date: '2024', title: 'Q3', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-4' },
        { date: '2024', title: 'Q4', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-5' },
        { date: '2025', title: 'Q1', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-1' },
        { date: '2025', title: 'Q2', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-2' },
        { date: '2025', title: 'Q3', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-3' },
        { date: '2025', title: 'Q4', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: '--accent-color-4' },
        // More items...
    ];

    return (

        <section className="roadmap">
            <h1 className="mb-6">Cucurbita Roadmap</h1>
            <ul className="transform after:translate-x-56 ease-in-out ">
            <Fade cascade damping={0.2}>
                {listItems.map((item, index) => (
                    <li key={index} className={item.color}>
                        <div className="date">{item.date}</div>
                        <div className="title">{item.title}</div>
                        <div className="descr">{item.descr}</div>
                    </li>
                ))}
            </Fade>
            </ul>
        </section>
    );
}
export default RoadMap


