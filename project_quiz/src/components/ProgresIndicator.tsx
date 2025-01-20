import React, { FC } from 'react';
// material
import { Box, Radio } from '@mui/material';
// material icons
import { CheckCircle, Cancel } from '@mui/icons-material';
// types
import { ProgressIndicatorProps } from '../types';

const ProgressIndicator: FC<ProgressIndicatorProps> = ({
  answers,
  totalQuestions,
}) => {
  return (
    <Box display="flex" justifyContent="center" gap={1}>
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const answer = answers[index] || null;
        const isCorrect = answer?.isCorrect ?? null;

        const color =
          isCorrect === null ? '#cccccc' : isCorrect ? 'green' : 'red';

        const icon =
          isCorrect === null ? (
            <Radio sx={{ color: '#cccccc' }} />
          ) : isCorrect ? (
            <CheckCircle sx={{ color: 'white' }} />
          ) : (
            <Cancel sx={{ color: 'white' }} />
          );

        return (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: color,
            }}
          >
            {icon}
          </Box>
        );
      })}
    </Box>
  );
};

export default ProgressIndicator;
