using System;
using System.Collections.Generic;
using System.Linq;

public static class SaddlePoints
{
    public static IEnumerable<(int, int)> Calculate(int[,] matrix)
    {

        List<int> maxIndices = new();
        List<(int, int)> saddlePoints = new();
        for(int i = 0; i <= matrix.GetUpperBound(0); i++)
        {
            int max = int.MinValue;
            maxIndices.Clear();
            for(int j = 0; j <= matrix.GetUpperBound(1); j++)
            {
                if(matrix[i, j] > max)
                {
                    maxIndices.Clear();
                    max = matrix[i, j];
                    maxIndices.Add(j);
                }
                else if(matrix[i, j] == max)
                {
                    maxIndices.Add(j);
                }
            }

            foreach(int l in maxIndices)
            {
                bool valid = true;
                for(int k = 0; k <= matrix.GetUpperBound(0); k++)
                {
                    if(matrix[k, l] < max)
                    {
                        valid = false;
                        break;
                    }
                }
                if(valid) {
                    saddlePoints.Add((i + 1, l + 1));
                }
            }
        }
        return saddlePoints;
    }
}
