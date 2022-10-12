import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Product as ProductInterface } from './product.interface';

export type ProductDocument = ProductInterface & Document;

@Schema()
export class Product implements ProductInterface {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;

  @Prop()
  category?: string;

  @Prop()
  description?: string;

  @Prop()
  isAvailable?: boolean;

  @Prop()
  quantity?: number;

  @Prop()
  rating?: number;

  @Prop()
  discount?: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
