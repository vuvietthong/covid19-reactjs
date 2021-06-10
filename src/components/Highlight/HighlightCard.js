import * as React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
    wrapper: (prop) => {
        if (prop.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
        if (prop.type === 'recovered') return { borderLeft: '5px solid #28a745' };
        else return { borderLeft: '5px solid gray' };
    },
    title: {
        fontSize: 18, marginBottom: 5
    },
    count: {
        fontSize: 18, fontWeight: 'bold'
    },
});
export default function HighlightCard({ title, count, type }) {
    const styles = useStyles({ type });
    return (
        <Card className={styles.wrapper}>
            <CardContent >
                <Typography component='p' variant='body2' className={styles.title}>
                    {title}
                </Typography>
                <Typography component='span' variant='body2' className={styles.count}>
                    <CountUp end={count} separator=' ' duration={2} />
                </Typography>
            </CardContent>
        </Card>
    );
};