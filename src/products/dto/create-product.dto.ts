import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsPositive,
} from 'class-validator';
import { Product } from '../product.interface';

export class CreateProductDto implements Product {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly image: string;

  @IsString()
  @ApiProperty()
  readonly category?: string;

  @IsString()
  @ApiProperty()
  readonly description?: string;

  @IsBoolean()
  @ApiProperty()
  readonly isAvailable?: boolean;

  @IsNumber()
  @ApiProperty()
  readonly quantity?: number;

  @IsNumber()
  @ApiProperty()
  readonly rating?: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  readonly discount?: number;
}
