import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.ProductModel(createProductDto);
    return createdProduct.save();
  }

  findAll() {
    return this.ProductModel.find().exec();
  }

  findOne(id: string) {
    return this.ProductModel.findById(id).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.ProductModel.findByIdAndUpdate(id, updateProductDto).exec();
  }

  remove(id: string) {
    return this.ProductModel.findByIdAndDelete(id).exec();
  }
}
