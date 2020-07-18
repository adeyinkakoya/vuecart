<?php

namespace App\Http\Controllers\Api;

use App\Cart;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsCartController extends Controller
{
    public function index()
    {
        return Cart::with('product')
                ->orderBy('created_at', 'desc')
                ->get();
    }

    public function store(Request $request)
    {
        // Checks the Cart against the product id passed from the request
        $item = Cart::where('product_id', $request->product_id);

        if ($item->count()) {
            $item->increment('quantity'); // If it exists , increase the quantity field
            $item = $item->first(); // Get the record, would only be 1
        } else {
            $item = Cart::forceCreate([
                'product_id' => $request->product_id,
                'quantity' => 1,
            ]);
        }

        return response()->json([
            'quantity' => $item->quantity,
            'product' => $item->product
        ]);
    }

    public function destroy($productId)
    {
    	$item = Cart::where('product_id', $productId)->delete();

        return response(null, 200);
    }

    public function destroyAll()
    {
        Cart::truncate();
    }
}
