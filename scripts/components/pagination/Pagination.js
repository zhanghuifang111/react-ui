var React = require('react');
var classNames = require('classnames');


/*
  分页
*/
var Pagination = React.createClass({
  //下一页
  next:function(e){
    var totalSize = this.props.totalSize || 100;
    var pageSize = this.props.pageSize || 15;
    var pageCount = Math.ceil(totalSize/pageSize);
    var page = this.state.page || 1;
    var middlePage = this.state.middlePage;
    if(page>=pageCount){
      e.stopPropagation();
    }else{
      
      if(middlePage>=pageCount-2 || page<middlePage){
        this.setState({
          page:page+1
        });
      }else{
        this.setState({
          page:page+1,
          middlePage:middlePage+1
        });
      }
      
      this.props.onPageChange(page+1);
    }
  },
  //上一页
  prev:function(e){
    var totalSize = this.props.totalSize;
    var pageSize = this.props.pageSize;
    var pageCount = Math.ceil(totalSize/pageSize);
    var page = this.state.page;
    var middlePage = this.state.middlePage;
    
    if(page<=1){
      e.stopPropagation();
    }else{

      if(middlePage<=3 || page>middlePage){
        this.setState({
          page:page-1
        });
      }else{
        
        this.setState({
          page:page-1,
          middlePage:middlePage-1
        });
      }

      this.props.onPageChange(page-1);
    }
  },
  //第一页
  first:function(e){
    if(this.state.page<=1){
      e.stopPropagation();
    }else{
      this.setState({
        page:1,
        middlePage:3
      });
      this.props.onPageChange(1);
    }
  },
  //最后一页
  last:function(e){
    var totalSize = this.props.totalSize || 100;
    var pageSize = this.props.pageSize || 15;
    var pageCount = Math.ceil(totalSize/pageSize);
    if(this.state.page>=pageCount){
      e.stopPropagation();
    }else{
      this.setState({
        page:pageCount,
        middlePage:pageCount-2
      });
     
      //this.props.onPageChange(pageCount);
    }
  },
  //跳向指定页
  jumpPage:function(i){
    var totalSize = this.props.totalSize;
    var pageSize = this.props.pageSize;
    var pageCount = Math.ceil(totalSize/pageSize);
    var middlePage = this.state.middlePage;

      if(i>middlePage && middlePage<pageCount-2){
        if((pageCount-i)>=2){
          this.setState({
            page:i,
            middlePage:i
          });
        }else{

          this.setState({
            page:i,
            middlePage:middlePage+1
          });
        }

      }else if(i<middlePage && middlePage>3){
        if((i-1>=2)){
          this.setState({
            page:i,
            middlePage:i
          });
        }else{
          this.setState({
            page:i,
            middlePage:middlePage-1
          });
        }
      }else{
        this.setState({
            page:i
          });
      }
    this.props.onPageChange(i);
  },
  getInitialState: function() {
    return {
      page:this.props.page || 1,
      middlePage:3 
    };
  },
  render:function(){
    var totalSize = this.props.totalSize || 100;
    var pageSize = this.props.pageSize || 15;
    var pageCount = Math.ceil(totalSize/pageSize);
    var middlePage = this.state.middlePage;
    var page = this.state.page;
    //console.log(page);
    var items = [];

    var prevClass = classNames({
        'notAllowed':page <= 1
      });
    var nextClass = classNames({
        'notAllowed':page >= pageCount 
      });

    items.push(<li onClick={this.first} className={prevClass}>&lt;&lt;</li>);
    items.push(<li onClick={this.prev} className={prevClass}>&lt;</li>);
    
    for(var i=middlePage-2;i<(middlePage+3);i++){
      
      if(i==page){
        items.push(<li className="page active" onClick={this.jumpPage.bind(this,i)}>{i}</li>);
      }else if(i>pageCount || i<1){
        continue;
      }else{
        items.push(<li className="page" onClick={this.jumpPage.bind(this,i)}>{i}</li>);
      }
    }

    items.push(<li onClick={this.next} className={nextClass}>&gt;</li>);
    items.push(<li onClick={this.last} className={nextClass}>&gt;&gt;</li>);
      
    return(
      <div className="pagination">
        <div className="pagination-info">共有{totalSize}条，每页显示:{pageSize}条</div>
        <ul>
          
          {items}
          
        </ul>
      </div>
    );
  }
});

module.exports = Pagination;