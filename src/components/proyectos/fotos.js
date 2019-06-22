import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function ImageGridList() {
  const classes = useStyles();
const tileData=[
    {img:"http://static.wixstatic.com/media/b2fe93_b4a83ac05c654f99a1af8b2e5f524a89~mv2.jpg/v1/fill/w_506,h_596,al_c,q_80/b2fe93_b4a83ac05c654f99a1af8b2e5f524a89~mv2.webp",title:"vinsoca"},
    {img:"https://static.wixstatic.com/media/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.jpg/v1/crop/x_0,y_40,w_1247,h_821/fill/w_372,h_240,al_c,q_80,usm_0.66_1.00_0.01/b2fe93_7c954c2f3e004667b34da9de8b01b09a~mv2.webp",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxMsmQRy17mPTExMBK8EckI5zkA2LKhduMO_3maaUvyKx4iDW",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPFg5PB_BgtyEt4bEMns2eDH9sx-wCkeRVMDsQJpGwqtRo6Gb",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGFufzuh7ZzdNzcB0mhT_mxyVsg2kwX-gxdmiLYJmqfNGEQ5HaA",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6B9PhDY8uPClyCQsxDsP-Q2rkuC2UJ_YM2NJdAYCzq4Ik0HBa",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkeFQd_hzlZLPcEeckmYYIU4tB-26pl-jWYsJRHm4kUV8ZKnyxQ",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Xaf0_Yqwdx4i2NWE5ajBguRqtAlhu5gZBi231YWjdbzqgnNCVw",title:"vinsoca"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSklxKqwYlTxnw5QTOtlUXUdLI-AsEPinFtyhpSFIw-tuPKV27Nkg",title:"vinsoca"},


]
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}