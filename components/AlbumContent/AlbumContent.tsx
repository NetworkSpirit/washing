import classes from './AlbumContent.module.css';
import {FC} from "react";
interface AlbumContentProps {
    tracklist?: item[];
}
type item = {
    position: string;
    title: string;
    duration: string;
}
const AlbumContent:FC<AlbumContentProps> = ({tracklist}) => {
    console.log(tracklist);
    const albumItem = [
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
        {
            type: 'A1',
            nameMusic: 'Ancord'
        },
    ]
    return (
        <div className={classes.container}>
            <h3>Содержание альбома</h3>
            <div className={classes.contentAlbum}>
                {
                    albumItem.map((albumItems, index) => {
                        return <><p key={index} className={classes.type}>{albumItems.type}<p className={classes.musicName}>{albumItems.nameMusic}</p></p><div className={albumItem.length - 1 !== index ? classes.line : ''}/> </>
                    })
                }
            </div>
        </div>
    );
};

export default AlbumContent;