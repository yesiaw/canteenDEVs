import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../main/header/Header';

const AboutUs = () => {
    return (
  <>
    <Header/>

    <Box align='center' m={2}>
      <Typography variant="h5">
        О нас
      </Typography>
      <Typography>
      Главное – вложиться в хронометраж. Например, 20 секунд – это приблизительно 250-300 символов текста. Если пихать невпихуемое – будет пулемётная очередь. В радиоролике нужно повторить название заведения 2-3 раза, эмоционально описать меню в нескольких словах и в конце добавить призыв к действию.
      </Typography>

       <Box m={4}>
       <Typography>
            Режим работы: с 10.00-23.00
        </Typography>
       </Box>
  
    </Box>
  </>
      
    )
}

export default AboutUs;

