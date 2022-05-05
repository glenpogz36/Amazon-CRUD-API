import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { stringify } from 'querystring';
import { ProductService } from './product.service';
import { ProductDocument } from './productschema';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    createProduct(
        @Body('name') name: string,
        @Body('price') price: number,
        @Body('description') description?: string,
    ): Promise<ProductDocument> {
        return this.productService.create(name, price, description)
    }

    @Get()
    findAllProducts(

    ): Promise<ProductDocument[]> {
        return this.productService.findAll()
    }

    @Get(':id')
    findProduct(@Param('id') id: string): Promise<ProductDocument> {
        return this.productService.find(id);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body('name') name: string,
        @Body('price') price: number,
        @Body('description') description?: string,
    ): Promise<ProductDocument> {
        return this.productService.Update(id, name, price, description);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.delete(id);
    }
}
