import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  TrendingUp, 
  Eye, 
  Calendar,
  MapPin,
  Star,
  DollarSign,
  ChevronDown
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 days');

  // Stats data
  const stats = [
    { label: 'Orders', value: '16', color: 'bg-orange-500' },
    { label: 'Products', value: '63', color: 'bg-gray-700' }
  ];

  // Transaction data
  const transactions = [
    { id: 'MRKPL00001', customer: 'Test Customer', amount: '$150.00' },
    { id: 'MRKPL00002', customer: 'Test Customer', amount: '$89.99' },
    { id: 'MRKPL00003', customer: 'Test Customer', amount: '$75.50' }
  ];

  // Activities data
  const activities = [
    { time: 'Jun 14', activity: 'New order received' },
    { time: 'Jun 13', activity: 'Product updated' },
    { time: 'Jun 12', activity: 'Customer inquiry' }
  ];

  // Latest Orders data
  const latestOrders = [
    {
      id: '100000001',
      date: 'Jun 14, 2024 8:45 PM',
      customer: 'John Doe',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$140.00',
      purchaseTotal: '$150.00',
      tax: 'test tax',
      status: 'Processing'
    },
    {
      id: '100000002',
      date: 'Jun 14, 2024 7:30 PM',
      customer: 'Jane Smith',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$120.00',
      purchaseTotal: '$130.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000003',
      date: 'May 16, 2024 6:15 PM',
      customer: 'Mike Johnson',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$100.00',
      purchaseTotal: '$110.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000004',
      date: 'May 15, 2024 5:20 PM',
      customer: 'Sarah Wilson',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$85.00',
      purchaseTotal: '$95.00',
      tax: 'test tax',
      status: 'Processing'
    }
  ];

  // Recently Added Products
  const recentProducts = [
    {
      id: 1,
      name: 'Cheesecake Slice Red Velvet',
      price: '$15.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 8:30 PM',
      quantity: 'Catalog, Search'
    },
    {
      id: 2,
      name: 'test product',
      price: '$10.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 10:45 AM',
      quantity: 'Catalog, Search'
    }
  ];

  // Latest Seller Tickets
  const sellerTickets = [
    {
      id: '10000016',
      message: 'Help Req',
      department: 'buyer_dept',
      agentName: 'admin',
      status: 'Open',
      priority: 'Normal'
    }
  ];

  // Recently Transaction
  const recentTransactions = [
    {
      type: 'order',
      incomeAmount: '$250.00',
      expenseAmount: '$225.00',
      netAmount: '$25.00',
      status: 'completed',
      createdDate: '2024-06-14 04:12:06'
    },
    {
      type: 'order',
      incomeAmount: '$180.00',
      expenseAmount: '$160.00',
      netAmount: '$20.00',
      status: 'completed',
      createdDate: '2024-06-13 02:30:15'
    }
  ];

  // Recently Product Review
  const productReviews = [
    {
      id: 1,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread Product',
      reviewText: 'It is a long established fact that a reader will be distracted by the readable...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 2,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread ring',
      reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 3,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 4,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    }
  ];

  // Shipping Order
  const shippingOrders = [
    {
      id: '100000002',
      customer: 'ZUUROAD02',
      shipment: 'ZUUROAD02',
      date: 'Jun 14, 2024 8:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000003',
      customer: 'ZUUROAD03',
      shipment: 'ZUUROAD03',
      date: 'Jun 14, 2024 7:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000004',
      customer: 'ZUUROAD04',
      shipment: 'ZUUROAD04',
      date: 'Jun 14, 2024 6:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000005',
      customer: 'ZUUROAD05',
      shipment: 'ZUUROAD05',
      date: 'Jun 14, 2024 5:20 PM',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000006',
      customer: 'ZUUROAD06',
      shipment: 'ZUUROAD06',
      date: 'Jun 14, 2024 4:10 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000007',
      customer: 'ZUUROAD07',
      shipment: 'ZUUROAD07',
      date: 'Jun 14, 2024 3:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000008',
      customer: 'ZUUROAD08',
      shipment: 'ZUUROAD08',
      date: 'Jun 14, 2024 2:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000009',
      customer: 'ZUUROAD09',
      shipment: 'ZUUROAD09',
      date: 'Jun 14, 2024 1:20 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000010',
      customer: 'ZUUROAD10',
      shipment: 'ZUUROAD10',
      date: 'Jun 14, 2024 12:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Top Row - Stats, Lifetime Sales, Map, Transactions, Activities */}
      <div className="grid grid-cols-12 gap-6">
        {/* Stats */}
        <div className="col-span-2 space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-8 h-8 ${stat.color} rounded`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Sales */}
        <div className="col-span-3 bg-gray-800 text-white rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Lifetime Sales</h3>
          <p className="text-2xl font-bold">₹ 320.29K</p>
          <div className="mt-4 h-32 bg-gray-700 rounded flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-400">Sales visualization</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 rounded">
              <div className="flex items-center justify-center h-full">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>₹85,156 ₹ 85,156.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions & Activities */}
        <div className="col-span-3 space-y-4">
          {/* Transactions */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Transaction</h3>
            <div className="space-y-2">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{transaction.id}</span>
                  <span className="font-medium">{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Activities</h3>
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <div key={index} className="text-sm">
                  <div className="text-gray-500">{activity.time}</div>
                  <div className="text-gray-700">{activity.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Latest Orders</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Order</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Date/Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Products</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Base Total</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Purchase Total</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Tax</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">View</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {latestOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx}>{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-gray-400">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.baseTotal}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.purchaseTotal}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.tax}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Added Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Product Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Price</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium">SKU</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Created At</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Visibility</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{product.price}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.createdAt}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Seller Tickets */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Latest Seller Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Ticket Id</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Message</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Department</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Agent Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sellerTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{ticket.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.message}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.department}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.agentName}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.priority}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Reply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Transaction */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Transaction</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Transaction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Transaction Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Income Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Expense Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Net Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{transaction.type}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{transaction.incomeAmount}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{transaction.expenseAmount}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{transaction.netAmount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{transaction.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Product Review */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Product Review</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Customer Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Product Sku</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Review Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Review Text</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Rating Summary for client</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{review.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{review.productSku}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{review.product}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{review.reviewText}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">{review.reviewSummary}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shipping Order */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Shipping Order</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Order</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Shipment</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Date/Time</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Products</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shippingOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{order.shipment}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx}>{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-gray-400">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Shipping Pickup */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Order Shipping Pickup</h3>
        </div>
        <div className="p-4">
          <div className="text-center text-gray-500">
            <p>No scheduled pickup records</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;