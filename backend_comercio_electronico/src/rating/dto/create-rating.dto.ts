import { IsNotEmpty, IsOptional, IsInt, Min, Max } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  @Min(1)
  @Max(5)
  score: number;

  @IsOptional()
  comment?: string;

  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  userId: number;
}